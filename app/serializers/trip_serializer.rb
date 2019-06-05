class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :updated_at
  belongs_to :user
  has_many :trip_entries
  has_many :locations, through: :trip_entries
end
