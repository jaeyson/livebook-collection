# Livebook collection

Collections mostly on benchmarking simple algorithms

## Here are few ways to install Livebook

### Option A. Installing Livebook in your local machine

1. [livebook setup](https://github.com/livebook-dev/livebook#installation)
2. `livebook server`

```bash
mix do local.rebar --force, local.hex --force

# get the latest version
mix escript.install hex livebook

# or specific version
mix escript.install hex livebook 0.12.1

# Start the Livebook server
livebook server

# See all the configuration options
livebook server --help
```


### Option B. using Docker

Set the env variable in your terminal

```bash
export UID=$(id -u)
export GID=$(id -g)
```

Then

```bash
docker compose up -d && docker container logs --follow --tail 50 livebook

# if you want to check if the saved livebook files
# really synced in your local machine
docker container exec -it livebook bash

# then inside the running container
ls -lha
```
