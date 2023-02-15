package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.example.pageObject.HostPage;
import org.example.pageObject.UserPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class AddCampHostSteps {
    private WebDriver webDriver;

    public AddCampHostSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("Host click button Add Camp")
    public void hostClickAddCampButton() {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickBtnAddCamp();
    }

    @And("Host input Title \"(.*)\", Price \"(.*)\", Description \"(.*)\", geser leaflet market, city \"(.*)\", Address \"(.*)\", Distance \"(.*)\"")
    public void hostInputData(String title, String price, String description, String city, String address, String distance) {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.inputTitle(title);
        hostPage.inputPrice(price);
        hostPage.inputDescription(description);
//        hostPage.moveMarkerLocation();
        hostPage.inputCity(city);
        hostPage.inputAddress(address);
        hostPage.inputDistance(distance);
    }

    @And("Host upload image \"(.*)\"and\"(.*)\"and\"(.*)\"")
    public void hostUploadImage(String image,String image1,String image2)throws InterruptedException {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.ClickUpdatePhoto(image);
        hostPage.ClickUpdatePhoto(image1);
        hostPage.ClickUpdatePhoto(image2);

        Thread.sleep(3000);
    }

    @And("Host upload business License \"(.*)\"")
    public void hostUploadBusinessLicense(String file) {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.updateBusinessLicense(file);
    }

    @Then("Host click Add Camp on addcamp page")
    public void hostClickAddCamp() {
        HostPage hostPage = new HostPage(webDriver);
        hostPage.clickBtnAddCamp();
    }

    @And("Host can not click button")
    public void addDisable(){
        HostPage hostPage = new HostPage(webDriver);
        Assert.assertFalse(hostPage.clickBtnaddNowEnabled());
    }
}

