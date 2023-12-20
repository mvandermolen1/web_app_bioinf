package nl.bioinf.model;

public class GameState {

    private int errors;
    private int state;

    @Override
    public String toString() {
        return "GameState{" +
                "errors=" + errors +
                ", state=" + state +
                '}';
    }

    public int getErrors() {
        return errors;
    }

    public void setErrors(int errors) {
        this.errors = errors;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}

