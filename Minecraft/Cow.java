package Minecraft;

public class Cow {
    private int health;
    private float literOfMilk;

    public Cow(int health, float literOfMilk) {
        this.health = health;
        this.literOfMilk = literOfMilk;
    }

    public int getHealth() {
        return health;
    }

    public float getLiterOfMilk() {
        return literOfMilk;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public void setLiterOfMilk(float literOfMilk) {
        this.literOfMilk = literOfMilk;
    }

    public void takeDamage(int damage) {
        health -= damage;
        if(health <= 0) {
            System.out.println("The Cow is dead");
        }
    }

    // public float milk() {
        
    // }
}
