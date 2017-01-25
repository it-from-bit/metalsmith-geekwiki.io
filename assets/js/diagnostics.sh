ps aux
netstat (all TCP connections), 
lsof
mounts

proc folder


mkdir -vp ~/diagnostics/{system/{stats,processes,files},network}

find /System -maxdepth 3

sysctl -a hw
hw
kern
machdep
net
vm
user
debug

top -u  -l 1 > file