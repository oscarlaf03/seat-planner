class V1::SeatsController < ApplicationController
    def index
        render json: {:seats => [
            {
                :name => 'some-seat',
                :guid=> '01415674d-a0e8-4748-a5f53a05c453'
            }
        ]}.to_json
    end
end
