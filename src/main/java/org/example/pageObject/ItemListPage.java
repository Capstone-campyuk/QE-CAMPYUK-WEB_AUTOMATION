package org.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ItemListPage {
    public static WebDriver driver;

    public ItemListPage(WebDriver driver){
        PageFactory.initElements(driver,this);
        this.driver = driver;
    }

    @FindBy(xpath = "")
    private WebElement pageTitle;

    public boolean pageIsDisplayed(){return pageTitle.isDisplayed();}

    public void clickCheckBtn(String camtSiteName){
        driver.findElement(By.xpath(""+camtSiteName+"")).click();
    }
}
