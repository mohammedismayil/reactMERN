build:
	cd server && $(MAKE) build

    
	cd server && cd db && $(MAKE) build
	
	cd client && $(MAKE) build

run:
	docker-compose up
	

runcontainers:

	cd server && cd db && $(MAKE) run
	cd server && $(MAKE) run
	cd client && $(MAKE) run

stop:
	docker-compose down