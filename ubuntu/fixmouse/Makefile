CC=gcc
CFLAGS=-Wall

all: fixmouse

fixmouse: fixmouse.c
	$(CC) $(CFLAGS) $< -o $@

install:
	chown root fixmouse
	chmod 4755 fixmouse
clean:
	rm fixmouse

