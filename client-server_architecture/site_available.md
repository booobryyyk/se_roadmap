## Using terminal check if website is available
### Using curl try to fetch http://mate.academy
The `curl` command is a command-line tool that is used to transfer data to or from a server. The `curl` command is available on most Unix-like operating systems, including Linux and macOS.

```sh
curl -I http://mate.academy
```
___

### Using curl check redirect destination for http://mate.academy
```sh
curl -I -L http://mate.academy
```
___
