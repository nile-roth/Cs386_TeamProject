
package tests2;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import  org.openqa.selenium.safari.SafariDriver;

public class TestClass {
	
	public static void main (String[] args) throws InterruptedException
	{
		System.setProperty(
                "webdriver.safari.driver",
                "/usr/bin/safaridriver");
		
		WebDriver driver = new SafariDriver();
		
		String url = "https://moneymonkeys.azurewebsites.net/";
		
		driver.get(url);
		
		String expectedTitle = "- MonkeyMonkey";
		String actualTitle = "";
		
		System.out.println("Testing page title:\n");
		
		actualTitle = driver.getTitle();
		
		if(actualTitle.contentEquals(expectedTitle))
		{
			System.out.println("Passed\n");
			
		}
		
		else
		{
			System.out.println("Failed\n");
		}
		
		System.out.println("Testing shift timer:\n");
		
		driver.findElement(By.xpath("/html/body/div/main/div[2]/button")).click();;
		
		Thread.sleep(30000);
		
		
		boolean seconds = driver.findElement(By.id("second")).isDisplayed();
		boolean minutes = driver.findElement(By.id("minute")).isDisplayed();
		boolean hours = driver.findElement(By.id("hour")).isDisplayed();
		
		if(seconds && minutes && hours)
		{
			System.out.println("Passed\n");
		}
		else
		{
			System.out.println("Failed\n");
		}
		
		System.out.println("Testing wage clock:\n");
		
		boolean dollars = driver.findElement(By.id("dollars")).isDisplayed();
		boolean cents = driver.findElement(By.id("cents")).isDisplayed();
		
		if(dollars && cents)
		{
			System.out.println("Passed\n");
		}
		else
		{
			System.out.println("Failed\n");
		}
		
		System.out.println("Testing pause:\n");
		
		driver.findElement(By.xpath("//*[@id=\"pause\"]")).click();
		
		seconds = driver.findElement(By.id("second")).isDisplayed();
		minutes = driver.findElement(By.id("minute")).isDisplayed();
		hours = driver.findElement(By.id("hour")).isDisplayed();
		
		if(seconds && minutes && hours)
		{
			System.out.println("Passed\n");
		}
		else
		{
			System.out.println("Failed\n");
		}
		
		System.out.println("Testing resume:\n");
		
		driver.findElement(By.xpath("//*[@id=\"start\"]")).click();
		
		seconds = driver.findElement(By.id("second")).isDisplayed();
		minutes = driver.findElement(By.id("minute")).isDisplayed();
		hours = driver.findElement(By.id("hour")).isDisplayed();
		
		if(seconds && minutes && hours)
		{
			System.out.println("Passed\n");
		}
		else
		{
			System.out.println("Failed\n");
		}
		
		System.out.println("Testing end shift:\n");
		
		driver.findElement(By.id("end")).click();
		
		driver.findElement(By.xpath("/html/body/div/main/div[2]/h1/a")).click();
		
		System.out.println("Passed\n");

		driver.close();
	}

}
TestClass.java
3 KB
