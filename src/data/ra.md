My primary contribution can be summarized by the phrase "researching security of networked systems". 
A candidate networked system for my research was IoT systems, more specifically smart home/manufacturing systems. 
I created a complete framework, dubbed [VetIoT](), to automatically test efficacy of security solutions proposed for IoT systems.
Furthermore, I conducted security analysis of networking subsystem of Linux kernel.
I developed a framework to emulate software defined networking (SDN) using containers.
I replicated various attacks on layer-2 (Mac), layer-3 (IP), and layer-4 (TCP) protocols.
Implemented attacks aginst VPN client applications (Nord, Keepsolid etc.) and built-in vpn configurators on iOS, Android, Mac, and Windows. 
I also developed kernel modules to create my own firewall based on linux netfilter hooks.


For the development of such a framework, I needed to:
- Develop REST-API modules to interact with IoT platforms
- Create Domain specific programming languages (DSLs) to define security policies for IoT systems
- Originate a heuristic, based on differntial testing, to identify correct operation of IoT defenses
- Create a code analysis tool to automatically parse and instrument IoT applications
- Implement 2 IoT security mechanism (can be a distributed software) to test efficacy of my heuristic 
    - a graph-based security policy enforcement server
    - a policy enforcement mechanism inside a MQTT server
- Isolate testing environvent for testing each IoT defense using vagrant and docker 
- Develop two different test-case generation mechanism to test each IoT defense
    - Random test event sequence generation
    - Statistical (n-gram) model based test event sequence generation


