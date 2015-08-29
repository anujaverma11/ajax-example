# gems
require 'dotenv'
require 'sinatra'
require 'httparty'
require 'pry'
require 'sinatra/flash'
require 'awesome_print'

# load ENV
Dotenv.load

# allow sessions
enable :sessions

# require ALL files
Dir.glob(File.join('**','*.rb')).each { |file| require './' + file }