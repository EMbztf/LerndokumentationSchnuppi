package Minecraft;

import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class App {
    public static void main(String[] args) throws InterruptedException {
        try (Scanner scanner = new Scanner(System.in)) {
            Player p1 = new Player();
            Zombie z1 = new Zombie(20, 2);
            System.out.println("Willkomen zum RPG Minecraft");
            System.out.println("Wie ist dein Name?");
            p1.setName(scanner.nextLine());
            System.out.println(p1.getName() + " wie viel Leben willst Du als Spieler haben?");
            p1.setHealth(scanner.nextInt());
            System.out.println(p1.getName() + " wie viel schaden willst Du den Gegnern zufügen?");
            p1.setDamage(scanner.nextInt());
            System.out.println("Dein Ziel ist es den auf Dir zukommenden Zombie zu besiegen!");
            int currentRound = 1;
            while(p1.isAlive() && z1.isAlive()) {
                System.out.println("Runde " + currentRound);
                TimeUnit.SECONDS.sleep(1);
                System.out.println("Du greifst den Zombie an und er verliert " + p1.getDamage() + " Herz(en)");
                z1.setHealth(z1.getHealth() - p1.getDamage());
                TimeUnit.SECONDS.sleep(1);
                if(z1.isAlive()) {
                    System.out.println("Jetzt greift der Zombie Dich an und Du verlierst " + p1.getDamage() + " Herz(en)");
                    p1.setHealth(p1.getHealth() - z1.getDamage());
                    TimeUnit.SECONDS.sleep(1);
                }    
                currentRound++;
            }
            if(!z1.isAlive()) {
                System.out.println("Du hast gewonnen");
            }
        }
    }
}