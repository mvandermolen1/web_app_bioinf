package nl.bioinf.game;

import java.util.Scanner;
public class GameEngine {
    private Scanner scanner;

    public GameEngine(){
        this.scanner = new Scanner(System.in);
    }

    public void startGame(){
        //init introduction
        System.out.println("Welcome to the lab!");

        //start the first scenario
        ScenarioHandler.handleScenarioOne();
    }
}
