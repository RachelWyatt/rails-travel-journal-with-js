class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :trip_entries
  has_many :trips, through: :trip_entries
end
