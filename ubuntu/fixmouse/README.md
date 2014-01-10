fixmouse
========

Ubuntu messes up my mouse sometimes.
This little program resets the mouse driver in the kernel.
It is supposed to be setgid to root, so I don't have to enter the root password every time I try to run it.

## Installing

```sh
git clone git://github.com/vierbergenlars/fixmouse.git
cd fixmouse
make
sudo make install
```
Move to anywhere you want.
`mv fixmouse /usr/bin` for it to be available on the shell anywhere
