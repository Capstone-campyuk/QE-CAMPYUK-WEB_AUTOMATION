package step_definitions;

import cucumber.api.java.en.And;
import org.example.pageObject.UserPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class CampSiteUserSteps {
    private WebDriver webDriver;

    public CampSiteUserSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @And("User click explore button")
    public void ExploreButton(){
        UserPage userPage = new UserPage(webDriver);
        userPage.clickExplore();
    }
   @And("User Should see the items list")
    public void verifyCampsitePage() throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        Assert.assertTrue(userPage.getCampsite());
//        Assert.assertTrue(userPage.getDisplayCamp1());
        Thread.sleep(5000);
    }

}
