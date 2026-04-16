"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  User, 
  Package, 
  MapPin, 
  LogOut, 
  ChevronRight, 
  ShoppingBag, 
  Clock, 
  CheckCircle2,
  Truck,
  Edit2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function AccountPage() {
  const { user, login, logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "profile";
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: ""
  });

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
    setFormData({
      name: user.name || "",
      phone: user.phone || "",
      email: user.email || "",
      dob: user.dob || "",
      gender: user.gender || ""
    });
  }, [user, router]);

  useEffect(() => {
    setActiveTab(searchParams.get("tab") || "profile");
  }, [searchParams]);

  if (!user) return null;

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    login({ ...user, ...formData });
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  const tabs = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "orders", label: "Order History", icon: Package },
    { id: "track", label: "Track Orders", icon: Truck },
  ];

  // Mock Orders
  const mockOrders = [
    {
      id: "ORD-9283",
      date: "Oct 12, 2023",
      status: "Delivered",
      items: ["Adger Tile - Sample", "Agra Tile - Sample"],
      total: "₹0"
    },
    {
      id: "ORD-8172",
      date: "Sep 28, 2023",
      status: "Shipped",
      items: ["Terracotta Classic - Sample"],
      total: "₹0"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 font-['Roboto',sans-serif]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white border border-black/5 p-8 sticky top-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-lg font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="font-bold text-sm uppercase tracking-wider">{user.name.split(" ")[0]}</h2>
                  <p className="text-[10px] text-zinc-400 font-medium">{user.phone}</p>
                </div>
              </div>

              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.15em] transition-all border-l-2 ${
                      activeTab === tab.id 
                        ? "border-black bg-zinc-50 text-black" 
                        : "border-transparent text-zinc-400 hover:text-black hover:bg-zinc-50/50"
                    }`}
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </button>
                ))}
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-4 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-red-500 hover:bg-red-50 transition-all border-l-2 border-transparent mt-4"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === "profile" && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-black/5 p-8 lg:p-12"
                >
                  <div className="flex justify-between items-center mb-12">
                    <h1 className="text-2xl font-serif">Account Profile</h1>
                    {!isEditing && (
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-black transition-colors"
                      >
                        <Edit2 size={12} /> Edit Profile
                      </button>
                    )}
                  </div>

                  <form onSubmit={handleUpdateProfile} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Full Name</label>
                        <input
                          type="text"
                          disabled={!isEditing}
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:border-black outline-none transition-colors disabled:text-zinc-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Phone Number</label>
                        <input
                          type="tel"
                          disabled={!isEditing}
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:border-black outline-none transition-colors disabled:text-zinc-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Email Address (Optional)</label>
                        <input
                          type="email"
                          disabled={!isEditing}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:border-black outline-none transition-colors disabled:text-zinc-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Date of Birth</label>
                        <input
                          type="date"
                          disabled={!isEditing}
                          value={formData.dob}
                          onChange={(e) => setFormData({...formData, dob: e.target.value})}
                          className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:border-black outline-none transition-colors disabled:text-zinc-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Gender</label>
                      <div className="flex gap-8 mt-2">
                        {["Male", "Female", "Other"].map((g) => (
                          <label key={g} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="radio"
                              name="gender"
                              disabled={!isEditing}
                              checked={formData.gender === g}
                              onChange={() => setFormData({...formData, gender: g})}
                              className="w-3 h-3 accent-black"
                            />
                            <span className="text-xs text-zinc-600 group-hover:text-black transition-colors">{g}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex gap-4 pt-6">
                        <Button 
                          type="submit"
                          className="rounded-none px-10 py-6 uppercase tracking-widest text-[10px] font-bold"
                        >
                          Save Changes
                        </Button>
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={() => setIsEditing(false)}
                          className="rounded-none px-10 py-6 uppercase tracking-widest text-[10px] font-bold border-black"
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </form>
                </motion.div>
              )}

              {activeTab === "orders" && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="bg-white border border-black/5 p-8 lg:p-12 mb-10">
                    <h1 className="text-2xl font-serif mb-2">Order History</h1>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Manage and review your sample selections</p>
                  </div>

                  {mockOrders.length > 0 ? (
                    mockOrders.map((order) => (
                      <div key={order.id} className="bg-white border border-black/5 overflow-hidden group hover:border-black/20 transition-all">
                        <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-50 bg-zinc-50/30">
                          <div className="flex items-center gap-6">
                            <div className="w-10 h-10 bg-zinc-200 flex items-center justify-center rounded-none group-hover:bg-black group-hover:text-white transition-colors">
                              <ShoppingBag size={18} />
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Order ID</p>
                              <p className="text-xs font-bold font-mono">{order.id}</p>
                            </div>
                            <div className="hidden sm:block h-8 w-px bg-zinc-200 mx-2" />
                            <div className="hidden sm:block">
                              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Placed On</p>
                              <p className="text-xs font-bold">{order.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`text-[9px] uppercase tracking-[0.2em] font-black px-3 py-1.5 rounded-none ${
                               order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                            }`}>
                              {order.status}
                            </span>
                            <button className="p-2 hover:bg-zinc-100 transition-colors">
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </div>
                        <div className="p-6 md:p-8">
                          <div className="space-y-4">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-zinc-100 border border-zinc-200 flex-shrink-0" />
                                <span className="text-xs font-medium text-zinc-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white border border-black/5 p-20 text-center">
                      <ShoppingBag size={40} className="mx-auto text-zinc-200 mb-6" />
                      <p className="text-sm uppercase tracking-widest font-bold text-zinc-400">No orders found</p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "track" && (
                <motion.div
                  key="track"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-black/5 p-8 lg:p-12"
                >
                  <h1 className="text-2xl font-serif mb-12">Track Active Orders</h1>
                  
                  {/* Stepper Mockup for the latest order */}
                  <div className="max-w-xl mx-auto py-10">
                    <div className="relative">
                      <div className="absolute left-0 top-1/2 w-full h-px bg-zinc-100 -translate-y-1/2 z-0" />
                      <div className="relative z-10 flex justify-between">
                        {[
                          { label: 'Confirmed', icon: CheckCircle2, status: 'complete' },
                          { label: 'Processing', icon: Clock, status: 'complete' },
                          { label: 'Shipped', icon: Truck, status: 'active' },
                          { label: 'Delivered', icon: CheckCircle2, status: 'pending' },
                        ].map((step, i) => (
                          <div key={i} className="flex flex-col items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                              step.status === 'complete' ? 'bg-black text-white' : 
                              step.status === 'active' ? 'bg-zinc-900 text-white scale-110 shadow-lg' : 
                              'bg-white border-2 border-zinc-100 text-zinc-300'
                            }`}>
                              <step.icon size={18} />
                            </div>
                            <span className={`text-[9px] uppercase tracking-widest font-black ${
                              step.status === 'pending' ? 'text-zinc-300' : 'text-zinc-900'
                            }`}>{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-20 p-8 border border-zinc-100 bg-zinc-50/50">
                    <div className="flex flex-col md:flex-row gap-10 justify-between items-center text-center md:text-left">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-1">Estimated Delivery</p>
                        <p className="text-lg font-bold">Tomorrow, by 8:00 PM</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-1">Courier Partner</p>
                        <p className="text-lg font-bold">Delhivery Express</p>
                      </div>
                      <Button variant="outline" className="rounded-none px-8 py-6 uppercase tracking-widest text-[10px] font-bold border-black">
                        Track on Website
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
