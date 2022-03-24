package Minecraft;

public class Zombie {
    private int health;
    private int damage;
    private boolean isAlive = true;

    public Zombie() {

    }

    public Zombie(int health, int damage) {
        this.health = health;
        this.damage = damage;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
        if(health <= 0) {
            isAlive = false;
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


