import {
  BanknoteArrowDown,
  Bone,
  BookOpen,
  BriefcaseBusiness,
  BriefcaseMedical,
  Camera,
  Car,
  CarFront,
  CarTaxiFront,
  Cigarette,
  CircleDollarSign,
  CircleQuestionMark,
  Coffee,
  Compass,
  CreditCard,
  Fuel,
  Dumbbell,
  Gem,
  Gift,
  Globe,
  Hamburger,
  HandCoins,
  HandHeart,
  Headphones,
  Heart,
  House,
  Keyboard,
  KeyRound,
  Lamp,
  Landmark,
  Martini,
  PartyPopper,
  PawPrint,
  PiggyBank,
  Pill,
  Pizza,
  Plane,
  Plug,
  Puzzle,
  Salad,
  Sandwich,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Siren,
  Sofa,
  Syringe,
  Ticket,
  Train,
  Tv,
  University,
  UsersRound,
  Wallet,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import z from "zod";

export type TIcon =
  | "CircleQuestionMark"
  | "BanknoteArrowDown"
  | "BriefcaseBusiness"
  | "Wallet"
  | "Pizza"
  | "PartyPopper"
  | "Coffee"
  | "ShoppingCart"
  | "CreditCard"
  | "CircleDollarSign"
  | "House"
  | "BookOpen"
  | "UsersRound"
  | "Salad"
  | "Heart"
  | "Gift"
  | "Plane"
  | "Puzzle"
  | "Camera"
  | "CarFront"
  | "PiggyBank"
  | "ShoppingBag"
  | "ShieldCheck"
  | "KeyRound"
  | "Globe"
  | "Zap"
  | "Wrench"
  | "Wifi"
  | "PawPrint"
  | "Bone"
  | "Pill"
  | "BriefcaseMedical"
  | "Headphones"
  | "Tv"
  | "Car"
  | "CarTaxiFront"
  | "Train"
  | "Compass"
  | "Gem"
  | "Hamburger"
  | "HandCoins"
  | "HandHeart"
  | "Plug"
  | "Lamp"
  | "Keyboard"
  | "Landmark"
  | "Martini"
  | "Cigarette"
  | "Sandwich"
  | "Shirt"
  | "Sofa"
  | "Siren"
  | "Syringe"
  | "Dumbbell"
  | "Fuel"
  | "Ticket"
  | "University";

export const iconsMap = {
  Wallet: Wallet,
  BriefcaseBusiness: BriefcaseBusiness,
  CreditCard: CreditCard,
  ShoppingCart: ShoppingCart,
  CircleDollarSign: CircleDollarSign,
  BanknoteArrowDown: BanknoteArrowDown,
  House: House,
  UsersRound: UsersRound,
  Salad: Salad,
  CarFront: CarFront,
  Coffee: Coffee,
  Heart: Heart,
  Pizza: Pizza,
  Gift: Gift,
  Camera: Camera,
  Plane: Plane,
  BookOpen: BookOpen,
  PartyPopper: PartyPopper,
  Puzzle: Puzzle,
  PiggyBank: PiggyBank,
  ShoppingBag: ShoppingBag,
  ShieldCheck: ShieldCheck,
  KeyRound: KeyRound,
  Globe: Globe,
  Zap: Zap,
  Fuel: Fuel,
  Wrench: Wrench,
  Wifi: Wifi,
  PawPrint: PawPrint,
  Bone: Bone,
  Pill: Pill,
  BriefcaseMedical: BriefcaseMedical,
  Headphones: Headphones,
  Tv: Tv,
  Car: Car,
  CarTaxiFront: CarTaxiFront,
  Train: Train,
  Compass: Compass,
  Gem: Gem,
  Hamburger: Hamburger,
  HandCoins: HandCoins,
  HandHeart: HandHeart,
  Plug: Plug,
  Lamp: Lamp,
  Keyboard: Keyboard,
  Landmark: Landmark,
  Martini: Martini,
  Cigarette: Cigarette,
  Sandwich: Sandwich,
  Shirt: Shirt,
  Sofa: Sofa,
  Siren: Siren,
  Syringe: Syringe,
  Ticket: Ticket,
  University: University,
  Dumbbell: Dumbbell,
  CircleQuestionMark: CircleQuestionMark,
};

export const iconsEnum = z.enum([
  "CircleQuestionMark",
  "BanknoteArrowDown",
  "BriefcaseBusiness",
  "Wallet",
  "Pizza",
  "PartyPopper",
  "Coffee",
  "ShoppingCart",
  "CreditCard",
  "CircleDollarSign",
  "House",
  "Fuel",
  "BookOpen",
  "UsersRound",
  "Salad",
  "Heart",
  "Gift",
  "Plane",
  "Puzzle",
  "Camera",
  "CarFront",
  "PiggyBank",
  "ShoppingBag",
  "ShieldCheck",
  "KeyRound",
  "Globe",
  "Zap",
  "Wrench",
  "Wifi",
  "PawPrint",
  "Bone",
  "Pill",
  "BriefcaseMedical",
  "Headphones",
  "Tv",
  "Car",
  "CarTaxiFront",
  "Train",
  "Compass",
  "Gem",
  "Hamburger",
  "HandCoins",
  "HandHeart",
  "Plug",
  "Lamp",
  "Keyboard",
  "Landmark",
  "Martini",
  "Cigarette",
  "Sandwich",
  "Shirt",
  "Sofa",
  "Siren",
  "Syringe",
  "Ticket",
  "University",
  "Dumbbell",
] as const);
