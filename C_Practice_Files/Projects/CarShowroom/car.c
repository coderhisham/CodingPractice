// required to enable use of scanf() and printf()
#include <stdio.h>
// required to enable use of "system"
#include <stdlib.h>

int main(){

    char userChoice;
    char userCarType;
    char userCarModel;
    char userProceed;
    char userBrandChoice;
    char userEX;


    printf("Welcome to the ABC Cars office!\n\n");


        // present the various actions the user can choose from
        printf("\n");
        printf("Choose the Car Brand\n");
        printf("a.BMW \n");
        printf("b.MERCEDES BENZ \n");
        printf("C.AUDI\n\n");

        userBrandChoice = getchar();

        getchar();


        switch(userBrandChoice){

            case 'a':
                printf("\n");
                printf("Choose the type\n");
                printf("1.SUV \n");
                printf("2.SEDAN \n");
                printf("3.HATCHBACK\n\n");
                userCarType = getchar();
                getchar();

                if(userCarType == '1'){
                    printf("\n");
                    printf("Choose the the Model:\n");
                    printf("1.BMW X1\n2.BMW X5\n3.BMW X7\n\n");
                    userCarModel = getchar();
                    getchar();


                    if(userCarModel == '1'){
                        //X1
                        printf("\nYou had chosen BMW X1 and it costs $40,000 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();

                    }else if(userCarModel == '2'){
                        //X5
                        printf("\nYou had chosen BMW X5 and it costs $75,900 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                            
                    }else if(userCarModel == '3'){
                        //X7
                        printf("\nYou had chosen BMW X7 and it costs $82,900 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                    }else{
                        printf("Invalid Input");
                    }

                }else if (userCarType == '2'){
                    printf("\n");
                    printf("Choose the the Model:\n\n");
                    printf("1.BMW i4\n2.BMW i7\n3.BMW i8\n\n");
                    userCarModel = getchar();
                    getchar();

                    if(userCarModel == '1'){
                        //i4
                        printf("\nYou had chosen BMW i4 and it costs $52,200 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();


                    }else if(userCarModel == '2'){
                        printf("\nYou had chosen BMW i7 and it costs $105,700 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                            
                    }else if(userCarModel == '3'){
                        printf("\nYou had chosen BMW i8 and it costs $147,500 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                    }else{
                        printf("Invalid Input");
                    }
                }else if(userCarType == '3'){
                    printf("\n");
                    printf("Choose the the Model:\n");
                    printf("1. BMW 1 Series\n\n");
                    userCarModel = getchar();
                    getchar();
                    printf("\nYou had chosen BMW 1 Series and it costs $49,900 \n");
                    printf("Did you want to Proceed [Y/n]: ");
                    userProceed = getchar();
                    getchar();
                    
                }else{
                    printf("Invalid Input");
                }
                break;

             //MERCEDES

            case 'b':
                printf("\n");
                printf("Choose the type\n");
                printf("1.SUV \n");
                printf("2.SEDAN \n");
                printf("3.HATCHBACK\n\n");
                userCarType = getchar();
                getchar();

                if(userCarType == '1'){
                    printf("\n");
                    printf("Choose the the Model:\n");
                    printf("1.Mercedes GLA\n2.Mercedes GLS\n3.Mercedes GLC\n\n");
                    userCarModel = getchar();
                    getchar();


                    if(userCarModel == '1'){
                        //GLA
                        printf("\nYou had chosen Mercedes GLA and it costs $40,000 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();

                    }else if(userCarModel == '2'){
                        //GLS
                        printf("\nYou had chosen Mercedes GLS and it costs $75,900 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                            
                    }else if(userCarModel == '3'){
                        //GLC
                        printf("\nYou had chosen Mercedes GLC and it costs $82,900 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                    }else{
                        printf("Invalid Input");
                    }

                }else if (userCarType == '2'){
                    printf("\n");
                    printf("Choose the the Model:\n");
                    printf("1.Mercedes S-Class\n2.Mercedes E-Class\n3.Mercedes C-Class\n\n");
                    userCarModel = getchar();
                    getchar();

                    if(userCarModel == '1'){
                        //Mercedes S-Class
                        printf("\nYou had chosen Mercedes S-Class and it costs $114,500 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();


                    }else if(userCarModel == '2'){
                        //Mercedes E-class
                        printf("\nYou had chosen Mercedes E-Class and it costs $82,800 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                            
                    }else if(userCarModel == '3'){
                        //Mercedes C-Class
                        printf("\nYou had chosen Mercedes C-Class and it costs $50,000 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                    }else{
                        printf("Invalid Input");
                    }
                }else if(userCarType == '3'){
                    printf("\n");
                    printf("Choose the the Model:\n");
                    printf("1.Mercedes A-Class\n\n");
                    userCarModel = getchar();
                    getchar();
                    //Mercedes A-Class
                    printf("\nYou had chosen Mercedes A-Class and it costs $35,900 \n");
                    printf("Did you want to Proceed [Y/n]: ");
                    userProceed = getchar();
                    getchar();
                    
                }else{
                    printf("Invalid Input");
                }
                break;
             

            //AUDI

            case 'c':
                printf("\n");
                printf("Choose the type\n");
                printf("1.SUV \n");
                printf("2.SEDAN \n");
                printf("3.HATCHBACK\n\n");
                userCarType = getchar();
                getchar();

                if(userCarType == '1'){
                    printf("\n");
                    printf("Choose the the Model:\n");
                    printf("1.AUDI Q3\n2.AUDI Q7 \n3.AUDI Q8\n\n");
                    userCarModel = getchar();
                    getchar();


                    if(userCarModel == '1'){
                        //Q3
                        printf("\nYou had chosen AUDI Q3 and it costs $39,000 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();

                    }else if(userCarModel == '2'){
                        //Q7
                        printf("\nYou had chosen AUDI Q7 and it costs $51,900 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                            
                    }else if(userCarModel == '3'){
                        //Q8
                        printf("\nYou had chosen AUDI Q8 and it costs $72,900 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                    }else{
                        printf("Invalid Input");
                    }

                }else if (userCarType == '2'){
                    printf("\n");
                    printf("Choose the the Model:\n");
                    printf("1.AUDI A4\n2.AUDI A6\n3.AUDI A8\n\n");
                    userCarModel = getchar();
                    getchar();

                    if(userCarModel == '1'){
                        //A4
                        printf("\nYou had chosen AUDI A4 and it costs $42,000 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();


                    }else if(userCarModel == '2'){
                        //A6
                        printf("\nYou had chosen AUDI A6 and it costs $65,300 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                            
                    }else if(userCarModel == '3'){
                        //A8
                        printf("\nYou had chosen AUDI A8 and it costs $88,900 \n");
                        printf("Did you want to Proceed [Y/n]: ");
                        userProceed = getchar();
                        getchar();
                    }else{
                        printf("Invalid Input");
                    }
                }else if(userCarType == '3'){
                    printf("\n");
                    printf("Choose the the Model:\n");
                    printf("1.AUDI A3\n\n");
                    userCarModel = getchar();
                    getchar();

                    printf("\nYou had chosen AUDI A3 and it costs $36,900 \n");
                    printf("Did you want to Proceed [Y/n]: ");
                    userProceed = getchar();
                    getchar();
                    
                }else{
                    printf("Invalid Input");
                }
                break;

         }
        
         if(userProceed == "Y" || "y"){
            printf("\nThanks for Buying!!! \n");
            printf("____________________\n\n");
         }else
         {
            printf("\nSorry to see you go. \n");
            printf("____________________\n");
         }
         

}