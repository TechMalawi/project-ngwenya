# Ngwenya Development Environment
# ================================

.PHONY: help up down restart logs logs-client logs-strapi logs-db build clean status shell-client shell-strapi shell-db

# Default target
help: ## Show this help message
	@echo "Ngwenya Development Environment"
	@echo "==============================="
	@echo ""
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

# Main commands
up: ## Start all services
	docker-compose up -d

down: ## Stop all services
	docker-compose down

restart: ## Restart all services
	docker-compose restart

build: ## Build all services
	docker-compose build

# Service-specific commands
up-client: ## Start only the client service
	docker-compose up -d ngwenya_client

up-strapi: ## Start only the Strapi CMS service
	docker-compose up -d strapi

up-db: ## Start only the database service
	docker-compose up -d strapiDB

# Logs commands
logs: ## Show logs for all services
	docker-compose logs -f

logs-client: ## Show logs for client service
	docker-compose logs -f ngwenya_client

logs-strapi: ## Show logs for Strapi CMS service
	docker-compose logs -f strapi

logs-db: ## Show logs for database service
	docker-compose logs -f strapiDB

# Status and monitoring
status: ## Show status of all services
	docker-compose ps

# Development commands
shell-client: ## Open shell in client container
	docker-compose exec ngwenya_client sh

shell-strapi: ## Open shell in Strapi container
	docker-compose exec strapi sh

shell-db: ## Open shell in database container
	docker-compose exec strapiDB psql -U ${DATABASE_USERNAME} -d ${DATABASE_NAME}

# Cleanup commands
clean: ## Stop services and remove volumes
	docker-compose down -v

clean-all: ## Stop services, remove volumes and images
	docker-compose down -v --rmi all

# Install dependencies
install: ## Install dependencies in client service
	docker-compose exec ngwenya_client npm install

install-client: ## Install dependencies in client only
	docker-compose exec ngwenya_client npm install

# Development workflow
dev: up logs ## Start services and show logs

fresh: clean up ## Clean restart - stop, remove volumes, and start fresh
