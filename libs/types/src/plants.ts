export interface IPlant {
  _id?: {
    $oid: string;
  };
  id: string;
  name: string;
  description: string;
  type: string;
  sunlight: string;
  wateringFrequency: string;
  wateringDescription: string;
  imageUri: string;
  wateringDates: string[]
}
