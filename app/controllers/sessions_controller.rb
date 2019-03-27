class SessionsController < ApplicationController

    def new 
    end 

    def create 
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id 
            redirect_to trips_path            
        else 
            flash[:message] = "Something went wrong"
            redirect_to login_path
        end
    end

    def destroy
        session.clear 
        redirect_to root_path
    end
end
