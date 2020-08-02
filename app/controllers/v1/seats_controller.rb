class V1::SeatsController < ApplicationController
    before_action :accept_all_params
    skip_before_action :verify_authenticity_token

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
        puts 'hello me \n\n putting params.seats:'
        puts  params
        render json: {:seats => [
            {
                :name => 'some-seat-calculated  ' + params['seats'],
                :guid=> SecureRandom.uuid
            }
        ]}.to_json
    end


    private

    def accept_all_params
        params.permit!
    end


end
