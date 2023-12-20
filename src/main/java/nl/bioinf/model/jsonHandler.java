package nl.bioinf.model;


import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

public class jsonHandler {
    private final ObjectMapper mapper = new ObjectMapper();

    public static void main(String[] args) {
        jsonHandler json = new jsonHandler();
        json.readJSON();
    }

    public void readJSON(){
        try {
            GameState gamestate = mapper.readValue(new File("../resources/data.json"), GameState.class);
            System.out.println(gamestate);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
