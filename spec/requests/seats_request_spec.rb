require 'rails_helper'
require_relative 'example_data'

RSpec.describe "Testing response behaviour", type: :request do

    it 'Seats is nil when invalid data is given' do
        post '/v1/seats', params: {seats:'invalid data'}
        body = JSON.parse(response.body)
        expect(body['seats']).to be_nil
    end

    it 'Errors is filled  when invalid data is given' do
        post '/v1/seats', params: {seats:'invalid data'}
        body = JSON.parse(response.body)
        expect(body['errors']).to be_truthy
    end

    it 'A "best seat" is found when one is available and data is valid' do
        post '/v1/seats', params: {seats:BEST_SEAT_IS_H7.to_json}
        body = JSON.parse(response.body)
        expect(body['seats']).to be_truthy
        expect(body['errors']).to be_nil
    end

    # it 'No seats and no erros when data is clean but all seats are taken' do
    #     post '/v1/seats', params: {seats:ALL_SEATS_ARE_TAKEN.to_json}
    #     body = JSON.parse(response.body)
    #     expect(body['seats']).to be_nil
    #     expect(body['errors'][0]).to be_nil
    # end

end
