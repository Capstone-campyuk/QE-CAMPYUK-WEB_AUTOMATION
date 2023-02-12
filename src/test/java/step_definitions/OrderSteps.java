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
    @And("User input checkin date")
    public void CheckInField(){
        UserPage userPage = new UserPage(webDriver);
        userPage.selectDate("13");

    }
    @And("User input checkout date")
    public void CheckOutField(){
        UserPage userPage = new UserPage(webDriver);

        userPage.selectCheckoutDate("14");
    }

    @And("User input number of guest \"(.*)\"")
    public void NumberOfGuest(String gues){
        UserPage userPage = new UserPage(webDriver);
        userPage.setGuest(gues);
    }
    @And("User input quantity items \"(.*)\"")
    public void InputQuantityItems(String number1){
        UserPage userPage = new UserPage(webDriver);
        userPage.ClickItems1();
        userPage.setQuantity1(number1);
        userPage.getPriceDetails();
    }
    @And("User choose payment method")
    public void InputQuantityItems(){
        UserPage userPage = new UserPage(webDriver);
        userPage.setPaymentMethod();
        userPage.setPaymentBca();
    }
    @And("User book campsite")
    public void BookCampSite(){
        UserPage userPage = new UserPage(webDriver);
        userPage.setPaymentMethod();
        userPage.clickBtnBookNow();
    }
    @And("User can not click button")
    public void BookCampSiteDisable(){
        UserPage userPage = new UserPage(webDriver);
        Assert.assertFalse(userPage.clickBtnBookNowEnabled());
    }

}
