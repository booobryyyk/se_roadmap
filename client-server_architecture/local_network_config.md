## Using terminal check local network configuration
### Your IP address

To find ip address of the local machine, use:
```sh
ipconfig getifaddr en0
```
or
```sh
ifconfig | grep "inet " | grep -v 127.0.0.1
```
___
### Current DNS server

To view the DNS configuration used by this system, use:
```sh
scutil --dns
```
or
```sh
cat /etc/resolv.conf
```
___
### Default gateway

To find a default gateway, use:
```sh
netstat -nr | grep default
```
