# git deploy hooks for _Bay_

## Directory structure

```
lars@garnet:~/deploys/bay$ ls -al
total 32
drwxr-xr-x 7 lars     lars 4096 Oct 15 00:02 .
drwxr-xr-x 3 lars     lars 4096 Oct 10 20:18 ..
drwxr-xr-x 8 lars     lars 4096 Oct 15 00:02 bare
drwxr-xr-x 3 lars     lars 4096 Oct 14 23:57 extra
-rw-r--r-- 1 lars     lars    1 Oct 15 00:02 hot
drwxr-xr-x 7 www-data lars 4096 Oct 11 15:51 hot1
drwxr-xr-x 7 www-data lars 4096 Oct 14 22:43 hot2
drwxr-xr-x 7 www-data lars 4096 Oct 15 00:02 hot3
lrwxrwxrwx 1 lars     lars   27 Oct 15 00:02 live -> /home/lars/deploys/bay/hot3
```

 * `bare` is a bare git repo (`$ git init --bare`) with the `post-receive` hook in it's `hooks` folder.
 * `extra` gets merged into the deploy folder right before all setup commands are run.
 * `hot` is a file, containing the number of the `hot{1,2,3}` directory that is currently symlinked to `live`.
 * `live` is a symlink to the folder currently running on the server



