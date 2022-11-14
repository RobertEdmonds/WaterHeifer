require "test_helper"

class Api::UploadsControllerTest < ActionDispatch::IntegrationTest
  test "should get prepare" do
    get api_uploads_prepare_url
    assert_response :success
  end
end
