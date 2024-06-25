start-dev:
	docker compose run --rm app npm run dev

test:
	docker compose run --rm app npm run test

test-watch:
	docker compose run --rm app npm run test-watch

install-deps:
	docker compose run --rm app npm i

build:
	docker compose run --rm app npm run test && npm run build
