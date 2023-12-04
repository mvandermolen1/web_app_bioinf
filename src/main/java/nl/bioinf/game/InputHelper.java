package nl.bioinf.game;

import java.util.Scanner;

public class InputHelper {
    public static int getUserInput(String prompt){
        System.out.println(prompt);
        Scanner scanner = new Scanner(System.in);
        while (!scanner.hasNextInt()){
            System.out.println("Please provide a valid integer");
            System.out.println(prompt);
            scanner.next();
        }
        return scanner.hasNextInt();
    }

    //other input methods.
}
