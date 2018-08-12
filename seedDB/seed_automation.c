#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void){
    const char *months[] = {
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
    };
    int month,day;
    for(month=0; month<12; month++){
        for(day=1; day<32; day++){
            putchar('{');
            putchar('\n');
            printf("\tname: \"\",\n");
            printf("\tday: \"%d\",\n",day);
            printf("\tmonth: \"%s\",\n",months[month]);

            putchar('}');
            putchar(',');
            putchar('\n');
        }
    }
    return 0;
}