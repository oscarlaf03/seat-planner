class V1::SeatsController < ApplicationController
    def index
        puts '\n\n here is seats#index'
        render json: {:seats => [
            {
                :name => 'some-seat',
                :guid=> '01415674d-a0e8-4748-a5f53a05c453'
            }
        ]}.to_json
    end


    def create
        puts seats_params
        render json: {:seats => [
            {
                :name => 'some-seat-created',
                :guid=> 'guid of a created seat'
            }
        ]}.to_json
    end

    def calculate
        puts 'hello me'
        puts seats_params
        render json: {:seats => [
            {
                :name => 'some-seat-calculated',
                :guid=> 'guid of a calculated seat'
            }
        ]}.to_json
    end


    private

    def seats_params
        params.require(:seats).permit(:data)
    end


end
