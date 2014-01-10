#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main()
{
	setuid(0);
	printf("# rmmod -v psmouse\n");
	system("rmmod -v psmouse");
	printf("# modprobe -v psmouse\n");
	system("modprobe -v psmouse");
	return 0;
}
