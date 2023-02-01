package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.DetailItemPage;
import org.example.pageObject.ItemListPage;
import org.openqa.selenium.WebDriver;

public class BookCampSteps {
    private WebDriver webDriver;

    public BookCampSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @When("User click check button with \"(.*)\" as campsiteName")
    public void userClickCheckButtonWithAsCampsiteName(String campsiteName) throws InterruptedException {
        ItemListPage itemListPage = new ItemListPage(webDriver);
        itemListPage.clickCheckBtn(campsiteName);

        Thread.sleep(3000);
    }

    @Then("User should be directed to detail item page with \"(.*)\" as campsiteName")
    public void userShouldBeDirectedToDetailItemPageWithAsCampsiteName(String campsiteName) throws InterruptedException {
        DetailItemPage detailItemPage = new DetailItemPage(webDriver);
        detailItemPage.pageIsDisplayed();

        Thread.sleep(3000);
    }
}
