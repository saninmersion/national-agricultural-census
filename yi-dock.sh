#!/usr/bin/env bash

LARAVEL_SERVICE=laravel
DATABASE_SERVICE=database
LARAVEL_USER=laravel

if [ $# -eq 0 ]; then
    docker-compose ps

    exit 0
fi

# Source the ".env" file so Laravel's environment variables are available...
if [ -f ./.env ]; then
    source ./.env
fi

# docker-compose up
if [ "$1" == "up" ]; then
    docker-compose -f docker-compose.yml up -d --remove-orphans --build

    exit 0
fi

# docker-compose down
if [ "$1" == "down" ]; then
    docker-compose -f docker-compose.yml down

    exit 0
fi

# enter into the docker container
if [ "$1" == "ssh" ]; then
    shift 1

    if [ ! -z $1 ]; then
        arrIN=(${1//@/ })
        sshUser=${arrIN[0]}
        sshServer=${arrIN[1]}

        sshService=$sshUser
        if [ ! -z $sshServer ]; then
            sshUserOption="-u $sshUser"
            sshService=$sshServer
        fi

        docker-compose exec $sshUserOption $sshService sh

        exit 0
    fi

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" /bin/bash -l

    exit 0
fi

# To execute/run any command inside laravel docker container in formatted way
if [ "$1" == "run" ]; then
    shift 1

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" "$@"

    exit 0
fi

# To execute/run any command inside laravel docker container in formatted way
if [ "$1" == "db:restore" ]; then
    shift 1

    docker-compose exec -T "$DATABASE_SERVICE" psql -U "$DB_USERNAME" -d "$DB_DATABASE" -w <"$@"

    exit 0
fi

# Composer command inside laravel docker container
if [ "$1" == "composer" ]; then
    shift 1

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" composer "$@"

    exit 0
fi

# PHP artisan command to run inside laravel docker container
if [ "$1" == "par" ]; then
    shift 1

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" php artisan "$@"

    exit 0
fi

# PHP artisan command to run inside laravel docker container
if [ "$1" == "yarn" ]; then
    shift 1

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" yarn "$@"

    exit 0
fi

# PHP artisan command to generate ziggy routes
if [ "$1" == "generate-routes" ]; then
    shift 1

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" \
        php artisan ziggy:generate resources/assets/shared/js/routes.generated.js --url="https://$APP_ADMIN_DOMAIN"

    exit 0
fi

# PHP Lint
if [ "$1" == "lint-php" ]; then
    shift 1

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" \
        ./vendor/bin/phpcs --standard=./.gitlab/etc/.php-cs-rules.xml ./app/

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" \
        ./vendor/bin/phpmd ./app/ ansi ./.gitlab/etc/.php-md-rules.xml

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" \
        ./vendor/bin/phpstan analyse -c ./.gitlab/etc/.phpstan.neon --memory-limit=2G

    exit 0
fi

# JS Lint
if [ "$1" == "lint-js" ]; then
    shift 1

    docker-compose exec -u "$LARAVEL_USER" "$LARAVEL_SERVICE" \
        ./node_modules/.bin/eslint -c ./.eslintrc ./resources

    exit 0
fi

# Pass unknown commands to the "docker-compose" binary...
docker-compose "$@"

exit 0
