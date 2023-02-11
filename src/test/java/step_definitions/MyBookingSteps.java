package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.example.pageObject.UserPage;
import org.openqa.selenium.WebDriver;

public class MyBookingSteps {
    private WebDriver webDriver;

    public MyBookingSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }
    @And("User want to see history for their own booking")
    public void BookingButton(){
        UserPage userPage = new UserPage(webDriver);
        userPage.buttonMyBooking();
    }
    @And("User see all their bookings")
    public void BookingPage(){
        UserPage userPage = new UserPage(webDriver);
        userPage.getMyBookingHeader();
    }
    @And("User click babi panggang karo order")
    public void BookingPage1(){
        UserPage userPage = new UserPage(webDriver);
        userPage.buttonDetailBooking();

    }
    @Then("User should see detail order")
    public void BookingDetailPage(){
        UserPage userPage = new UserPage(webDriver);
        userPage.getMyBookingHeaderDetail();
    }

    @And("User click cancel on babi panggang karo order")
    public void CancelBooking(){
        UserPage userPage = new UserPage(webDriver);
        userPage.buttonCancelBooking();
    }




}
