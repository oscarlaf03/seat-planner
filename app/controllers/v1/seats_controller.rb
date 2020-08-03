class V1::SeatsController < ApplicationController
    require 'json'
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

    def calculate
        puts 'putting  finded seat'
        puts find_seat
        render json: {:seats => [
           find_seat.to_json
        ]}
    end

    private

    def accept_all_params
        params.permit!
    end

    def find_seat
        begin
            data = JSON.parse(params['seats'].strip)
            rows =  ('a'..'z').to_a[0..data['venue']['layout']['rows']]
            columns =  (1..data['venue']['layout']['columns']).to_a
            best_seat = [0,columns[columns.length/2]]
            seats = data['seats'].map{ |s| data['seats'][s[0]]}.select{ |s| s['status']== 'AVAILABLE'}
            seats.each{ |s| s['distance'] = getEuclidianDistance([rows.index(s['row']),s['column']],best_seat)}
            {
                seats: [min_seat = seats.min_by { |s| s['distance'] }],
                errors: nil
            }

        rescue
            {
                seats: nil,
                errors:  "Invalid ata: \" #{params['seats']}\" does not follow the data object format"
            }
        end
    end

    def getEuclidianDistance(a,b)
       Math.sqrt((( a[0]-b[0])**2) + (( a[1]-b[1])**2))
    end
end
