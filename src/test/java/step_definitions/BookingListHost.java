package step_definitions;

import cucumber.api.java.en.And;
import org.example.pageObject.HostPage;
import org.openqa.selenium.WebDriver;

public class BookingListHost {
    private WebDriver webDriver;

    public BookingListHost(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @And("Host see bookings list")
    public void hostClickButtonBookingList() {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickBtnBokingList();
        hostPage.getDisplayBookinglist();
    }

}
