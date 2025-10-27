## Using terminal check if remote server is available
### Using dig get DNS A record for google.com
For this task, we will use the `dig` command. The `dig` command is a DNS lookup utility that is used to query DNS servers. The `dig` command is available on most Unix-like operating systems, including Linux and macOS.

```sh
dig google.com A
```
___

### Using dig get DNS AAAA record google.com
The command to get the AAAA record for google.com is similar to the previous command, but with the `AAAA` option instead of `A`.

```sh
dig google.com AAAA
```

___

### Ping google.com via ipv4 and ipv6

___

### Scan server for opened ports using nmap
To scan a server for open ports, we can use the `nmap` command. The `nmap` command is a network scanning tool that is used to discover hosts and services on a computer network. The `nmap` command is available on most Unix-like operating systems, including Linux and macOS.

```sh
nmap <google ipv4>
```
