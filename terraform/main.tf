terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.0"
    }
  }
}

provider "google" {
  # 👇 ЗАМІНИ ЦЕ НА СВІЙ PROJECT ID 👇
  project = "kneu-480915"
  region  = "europe-central2" # Варшава (найближчий дата-центр)
}

# 1. Вмикаємо необхідні сервіси Google (API) 🔌
resource "google_project_service" "run_api" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "artifact_registry_api" {
  service            = "artifactregistry.googleapis.com"
  disable_on_destroy = false
}

# 2. Створюємо "гараж" для твого Docker-образу (Artifact Registry) 📦
resource "google_artifact_registry_repository" "kneu_repo" {
  location      = "europe-central2"
  repository_id = "kneu-images"
  description   = "Docker repository for KNEU site"
  format        = "DOCKER"
  depends_on    = [google_project_service.artifact_registry_api]
}

# 3. Створюємо сам сервіс сайту (Cloud Run) 🚀
resource "google_cloud_run_service" "kneu_site" {
  name     = "kneu-nextgen-portal"
  location = "europe-central2"
  depends_on = [google_project_service.run_api]

  template {
    spec {
      containers {
        # Спочатку використовуємо тестовий образ від Google,
        # щоб просто підняти інфраструктуру. Свій зальємо пізніше.
        image = "europe-central2-docker.pkg.dev/kneu-480915/kneu-images/nextgen-site:v1"
        resources {
            limits = {
              memory = "512Mi" # Економимо ресурси
              cpu    = "1000m"
            }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# 4. Відкриваємо двері для всіх (Публічний доступ) 🌍
resource "google_cloud_run_service_iam_member" "allUsers" {
  service  = google_cloud_run_service.kneu_site.name
  location = google_cloud_run_service.kneu_site.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Виводимо посилання на готовий сайт 🔗
output "website_url" {
  value = google_cloud_run_service.kneu_site.status[0].url
}