---
outline: deep
---
# IP Address and Netmask

An IP address is a unique numerical identifier assigned to every device connected to a network, functioning much like a address on the internet. In the most common version (IPv4), it consists of four numbers separated by dots, such as 192.168.1.100, where each number ranges from 0 to 255. This address allows other devices to locate and communicate with your device across networks.

A netmask works alongside an IP address to define which portion of the address identifies the network and which portion identifies the specific device on that network. Written in the same format as an IP address (like 255.255.255.0), the netmask acts as a filter that helps computers understand whether another device is on the same local network or requires routing through a gateway. For example, with a netmask of 255.255.255.0, devices with IP addresses like 192.168.1.100 and 192.168.1.150 would be on the same network, while 192.168.2.100 would be on a different network.

Together, the IP address and netmask create a complete addressing scheme that enables both local communication and proper routing of traffic between different networks. Modern network notation often combines these using CIDR notation, where 192.168.1.100/24 represents an IP address with a netmask equivalent to 255.255.255.0, making network configuration more concise and manageable.

# Default Gateway

The default gateway serves as the exit point from your local network to the broader internet or other networks. When your computer needs to communicate with a device that isn't on your local network, it sends that traffic to the default gateway, which is typically a router that knows how to forward the data to its destination. Without a properly configured default gateway, your device can only communicate with other devices on the same local network.

Think of the default gateway as the post office for your neighborhood—all outgoing mail that isn't going to your immediate neighbors gets sent there first, and the post office figures out the best route to deliver it. In most home and office networks, the default gateway is your router's IP address, commonly something like 192.168.1.1 or 192.168.0.1. When you visit a website or send an email, your device consults its routing table, determines the destination isn't local, and forwards the packets to the default gateway for delivery.

# DNS Server

A DNS (Domain Name System) server acts as the internet's phone book, translating human-readable domain names like google.com into the numerical IP addresses that computers use to communicate. When you type a website address into your browser, your computer queries a DNS server to discover the corresponding IP address, allowing your browser to then connect to the correct server. This translation service happens almost instantaneously and is fundamental to making the internet user-friendly.

DNS servers operate in a hierarchical system, with your device typically configured to use DNS servers provided by your internet service provider or third-party services like Google's 8.8.8.8 or Cloudflare's 1.1.1.1. When you make a request, if your configured DNS server doesn't have the answer cached, it queries other DNS servers up the hierarchy until it finds the authoritative answer. This distributed system ensures reliability and speed while handling billions of queries every day across the global internet.

# DNS Record Types (A and AAAA)

An A record (Address record) is the most fundamental type of DNS record, creating a direct mapping between a domain name and an IPv4 address. When a DNS server receives a query for a domain name, it returns the A record containing the 32-bit IPv4 address where that service can be reached. For example, an A record might map example.com to 93.184.216.34, telling computers exactly where to find that website's server.

An AAAA record (pronounced "quad-A") serves the same purpose as an A record but for the newer IPv6 addressing system. As the internet exhausts available IPv4 addresses, IPv6 provides a vastly larger address space using 128-bit addresses written in hexadecimal format. An AAAA record maps a domain name to an IPv6 address like 2606:2800:220:1:248:1893:25c8:1946. Modern websites often have both A and AAAA records configured, allowing them to be accessible via both IPv4 and IPv6, ensuring compatibility with all types of internet connections.

# DHCP

DHCP (Dynamic Host Configuration Protocol) automates the process of assigning IP addresses and network configuration to devices joining a network. When you connect your laptop to a Wi-Fi network or plug in an ethernet cable, a DHCP server on that network automatically provides your device with an IP address, netmask, default gateway, and DNS server addresses—all the information needed to communicate on the network and access the internet.

Without DHCP, network administrators would need to manually configure every device with unique IP addresses and network settings, a tedious and error-prone process. DHCP servers maintain a pool of available IP addresses and "lease" them to devices for a specified time period, after which the device must renew the lease or receive a new address. This dynamic allocation prevents IP address conflicts, efficiently manages limited address space, and makes it effortless for users to move between networks. In home networks, your router typically functions as the DHCP server, while in enterprise environments, dedicated DHCP servers manage thousands of devices across complex network infrastructures.

# TCP vs UDP

TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two fundamental protocols for transmitting data over networks, each designed for different use cases. TCP is connection-oriented, meaning it establishes a formal connection between sender and receiver before transmitting data, ensures all packets arrive in order, and retransmits any lost packets. This reliability makes TCP ideal for applications where accuracy is critical, such as web browsing, email, and file transfers, where you need every piece of data to arrive correctly even if it takes slightly longer.

UDP, by contrast, is connectionless and operates on a "fire and forget" principle—it sends packets without establishing a connection, doesn't wait for acknowledgments, and doesn't retransmit lost data. This makes UDP much faster and more efficient but less reliable. UDP excels in situations where speed matters more than perfect accuracy, such as live video streaming, online gaming, or voice calls, where a dropped packet might cause a brief glitch but waiting to retransmit it would cause more noticeable lag or stuttering.

The choice between TCP and UDP fundamentally represents a tradeoff between reliability and speed. TCP's overhead of establishing connections, acknowledging every packet, and maintaining order creates latency but guarantees data integrity. UDP's minimal overhead and lack of error correction mechanisms make it faster and more suitable for real-time applications where occasional data loss is acceptable and old data becomes irrelevant as new data arrives.

# What Protocol Does HTTP Use?

HTTP (Hypertext Transfer Protocol) uses TCP as its underlying transport protocol. When your browser connects to a web server, it establishes a TCP connection first, typically on port 80 for HTTP or port 443 for HTTPS. This choice makes perfect sense because web pages consist of HTML, images, scripts, and other resources that must be delivered completely and accurately—a missing piece of code or a corrupted image would break the page. TCP's reliable, ordered delivery ensures that every byte of a web page arrives intact and in the correct sequence.

The TCP connection guarantees that when you request a web page, the server's response will be delivered reliably even if packets are lost or arrive out of order on the internet. This reliability is essential for HTTP's request-response model, where the client expects a complete, accurate response to every request. Modern versions of HTTP, including HTTP/2 and HTTP/3, have evolved the protocol's efficiency, with HTTP/3 actually using QUIC (which runs over UDP) to improve performance, but traditional HTTP and HTTP/2 rely on TCP's proven reliability for web communication.

# What Protocol Does DNS Use?

DNS primarily uses UDP for most queries because speed and efficiency are more important than the overhead of TCP's reliability mechanisms for simple name lookups. A typical DNS query is small enough to fit in a single UDP packet, and if the query gets lost, the client can simply retry it quickly—waiting for TCP's connection establishment and acknowledgment would actually be slower than just sending another UDP query. DNS servers listen on port 53 for these UDP queries, handling billions of lightning-fast lookups every day.

However, DNS does use TCP in specific situations where reliability or larger message sizes become necessary. When a DNS response is too large to fit in a single UDP packet (over 512 bytes traditionally, though modern systems support larger sizes), the server signals the client to retry using TCP, which can handle fragmented messages across multiple packets. DNS also uses TCP for zone transfers between DNS servers, where authoritative name servers replicate their entire database of records to backup servers—a process requiring guaranteed delivery of potentially megabytes of data. This dual-protocol approach allows DNS to be fast for everyday queries while still supporting complex operations that demand TCP's reliability.
