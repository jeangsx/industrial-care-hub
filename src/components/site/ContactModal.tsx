import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactModalProps {
  trigger: ReactNode;
  title?: string;
}

const ContactModal = ({ trigger, title = "Solicitar servicio" }: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const professionalMessage = `Estimado equipo de ECC SAC,

Me pongo en contacto con ustedes para solicitar información sobre sus servicios térmicos industriales y coordinar una posible venta o visita técnica.

A continuación mis datos de contacto:
• Nombre: ${nombre || "—"}
• Empresa: ${empresa || "—"}
• Teléfono: ${telefono || "—"}
• Email: ${email || "—"}

Detalle de la solicitud:
${mensaje || "—"}

Quedo atento a su respuesta para coordinar los siguientes pasos.

Saludos cordiales.`;

  const sendBoth = () => {
    // Abre WhatsApp en una pestaña nueva y dispara el correo en paralelo
    window.open(
      `https://wa.me/51938154638?text=${encodeURIComponent(professionalMessage)}`,
      "_blank",
    );
    setTimeout(() => {
      window.location.href = `mailto:ericksoria@calderas-ecc.com?subject=${encodeURIComponent(
        "Solicitud de venta / visita técnica",
      )}&body=${encodeURIComponent(professionalMessage)}`;
    }, 300);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-left">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="pt-2">
            Envía tu consulta directo a <span className="font-semibold">+51 938 154 638</span> o a <span className="font-semibold">ericksoria@calderas-ecc.com</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="modal-nombre" className="text-xs">
              Nombre
            </Label>
            <Input
              id="modal-nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              placeholder="Tu nombre"
              className="mt-1 h-9"
            />
          </div>
          <div>
            <Label htmlFor="modal-empresa" className="text-xs">
              Empresa
            </Label>
            <Input
              id="modal-empresa"
              value={empresa}
              onChange={(event) => setEmpresa(event.target.value)}
              placeholder="Nombre de empresa"
              className="mt-1 h-9"
            />
          </div>
          <div>
            <Label htmlFor="modal-telefono" className="text-xs">
              Teléfono
            </Label>
            <Input
              id="modal-telefono"
              value={telefono}
              onChange={(event) => setTelefono(event.target.value)}
              placeholder="+51 938 154 638"
              className="mt-1 h-9"
            />
          </div>
          <div>
            <Label htmlFor="modal-email" className="text-xs">
              Email
            </Label>
            <Input
              id="modal-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="correo@empresa.com"
              className="mt-1 h-9"
            />
          </div>
          <div>
            <Label htmlFor="modal-mensaje" className="text-xs">
              Mensaje
            </Label>
            <textarea
              id="modal-mensaje"
              value={mensaje}
              onChange={(event) => setMensaje(event.target.value)}
              className="w-full min-h-[112px] rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              placeholder="Describe tu solicitud o nos cuentas qué necesitas"
            />
          </div>
        </div>

        <div className="mt-6">
          <Button variant="hero" className="w-full" type="button" onClick={sendBoth}>
            Enviar solicitud (WhatsApp + Correo)
          </Button>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          Tu solicitud se enviará simultáneamente por WhatsApp y por correo a nuestro equipo técnico.
        </div>

        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button variant="secondary" size="sm" type="button">
              Cerrar
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
