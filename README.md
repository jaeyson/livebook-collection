# Livebook collection

Collections mostly on benchmarking simple algorithms

---

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
