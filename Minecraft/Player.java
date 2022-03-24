package Minecraft;

public class Player {
    private String name;
    private int health;
    private int damage;
    private boolean isAlive = true;

    public Player() {

    }

    public Player(int health, int damage) {
        this.health = health;
        this.damage = damage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
        if(health <= 0) {
            isAlive = false;
            System.out.println("Du hast verloren.");
        }
    }

    public int getDamage() {
        return damage;
    }

    public void setDamage(int damage) {
        this.damage = damage;
    }

    public boolean isAlive() {
        return isAlive;
    }

    public void setAlive(boolean isAlive) {
        this.isAlive = isAlive;
    }
}
