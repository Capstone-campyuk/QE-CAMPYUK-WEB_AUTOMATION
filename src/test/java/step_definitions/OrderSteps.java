package step_definitions;

import cucumber.api.java.en.And;
import org.example.pageObject.UserPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class OrderSteps {
    private WebDriver webDriver;

    public OrderSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }
    @And("User input checkin date \"(.*)\"")
    public void CheckInField(String checkIN){
        UserPage userPage = new UserPage(webDriver);
        userPage.setChekIn(checkIN);

    }
    @And("User input checkout date \"(.*)\"")
    public void CheckOutField(String checkOut){
        UserPage userPage = new UserPage(webDriver);
        userPage.selectCheckoutDate(checkOut);

    }

    @And("User input number of guest \"(.*)\"")
    public void NumberOfGuest(String gues)throws InterruptedException{
        UserPage userPage = new UserPage(webDriver);
        userPage.setGuest(gues);
        Thread.sleep(3000);
    }
    @And("User input quantity items \"(.*)\"")
    public void InputQuantityItems(String number1)throws InterruptedException{
        UserPage userPage = new UserPage(webDriver);
        userPage.ClickItems1();
        userPage.setQuantity1(number1);
        Thread.sleep(3000);
        userPage.getPriceDetails();
    }
    @And("User choose payment method")
    public void InputQuantityItems()throws InterruptedException{
        UserPage userPage = new UserPage(webDriver);
        userPage.setPaymentMethod();
        userPage.setPaymentBca();
        Thread.sleep(3000);

    }
    @And("User book campsite")
    public void BookCampSite()throws InterruptedException{
        UserPage userPage = new UserPage(webDriver);
        userPage.setPaymentMethod();
        userPage.clickBtnBookNow();
        Thread.sleep(3000);

    }
    @And("User can not click button")
    public void BookCampSiteDisable(){
        UserPage userPage = new UserPage(webDriver);
        Assert.assertFalse(userPage.clickBtnBookNowEnabled());
    }

}
