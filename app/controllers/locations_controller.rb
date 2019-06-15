class LocationsController < ApplicationController

    def new 
        @location = Location.new
        @locations = Location.all
    end 

    def create
        @location = Location.new(location_params)
        if @location.save
            #redirect_to root_path
            render json: @location
        else 
            render 'locations/new'
        end 
    end

    private 

    def location_params 
        params.require(:location).permit(:name)
    end

end
