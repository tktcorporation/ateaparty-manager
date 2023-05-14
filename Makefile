up:
	docker compose up -d && docker compose exec app bash -c "nr setup" && docker compose exec app bash -c "nr rw dev"
